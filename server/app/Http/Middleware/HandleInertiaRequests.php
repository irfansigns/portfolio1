<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Inertia\Inertia;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            // 'appName' => config('app.name'),
            'appName' => "Laravel Test App",
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],

            'categories' =>function(){
                $category = DB::table('categories')
                ->select('id', 'cname')
                ->get();
                return $category;
            },

            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },

            'cart'=>function(){
                return Session::get('cart')? Session::get('cart') : (object)[];
            },

            //Different methods of using return function
            'uName' => function() {
                if(Auth::user()){
                    return Auth::user()->name;
                }
            },

            'loginDetail' =>function(){
                if(Auth::user()){
                    return[
                        'isLoggedIn' => true,
                        'name' => Auth::user()->name,
                    ];
                }else{
                    return [
                        'isLoggedIn' => false,
                    ]; 
                }
            },

            'userName' => function() {
                return Auth::user()? Auth::user()->name :null;
            },
            
            //It'll send json 'auth' and under this there'll be an object 'user'
            'auth.user' => fn () => $request->user()
                ? $request->user()->only('id', 'name', 'email','contact','address')
                : null,
        ]);
    }
}



// Synchronously
