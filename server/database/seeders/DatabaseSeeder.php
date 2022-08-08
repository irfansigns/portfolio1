<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        \App\Models\User::factory()->create([
            'name' => 'Irfan Asim',
            'email' => 'irfansigns@gmail.com',
            'password' => \bcrypt('password'),
        ]);

        \App\Models\Admin::factory()->create([
            'name' => 'Sameer Jan',
            'email' => 'sameer@gmail.com',
            'password' => \bcrypt('password'),
        ]);

        // Storage::disk('local')->put($product.'.txt', 'Product Description');
        
        for ($i = 1; $i <= 15; $i++) {
            Storage::disk('local')->put($i.'.txt', 'Product Description for this product');
        }

        \App\Models\Product::factory(15)->create();
        \App\Models\Category::factory(5)->create();
        \App\Models\Pimage::factory(35)->create();
    }
}
