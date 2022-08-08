<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Portfolio</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}" >
        <link rel="stylesheet" href="{{ mix('css/test/dstyle.css') }}" >
        <script src="{{ mix('js/app.js') }}" defer></script>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap">
        <link rel="shortcut icon" href="img/favicon.png">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <script>
            window.base_url = "{{url('/')}}"
        </script>
        @routes
    </head>
    <body>
        @inertia
    </body>
</html>
