<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>SBK</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body class="antialiased">
    <nav class="navbar navbar-expand-lg nav-bg fixed-top shadow">
        <div class="container-fluid">
            <a class="ml-5 navbar-brand" href="#">
                <p style="top: 0%;">LOGO</p>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation" onclick="reorder()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse start-50 top-50 position-absolute translate-middle"
                id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="bt nav-link fs-5 ps text-uppercase" href="#">home</a>
                    </li>
                    <li class="nav-item margin">
                        <a class="bt nav-link fs-5 ps text-uppercase" href="#">our member</a>
                    </li>
                    <li class="nav-item margin">
                        <a class="bt nav-link fs-5 ps text-uppercase" href="#">about us</a>
                    </li>
                    <li class="nav-item margin">
                        <a class="bt nav-link fs-5 ps text-uppercase" href="#">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div>
        @yield('content')
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
</body>

</html>