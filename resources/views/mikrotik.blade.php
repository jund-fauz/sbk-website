@extends('layouts.main')

@section('content')
<div class="bg-main mikrotik-first-style">
    <div class="row align-items-center text-center">
        <div class="col">
            <p class="text-uppercase text-white small-font">mikrotik program</p>
            <h1 class="text-uppercase text-white large-font">mikrotik academy</h1>
            <h6 class="text-white small-font"><span class="text-uppercase">smk it</span> <span class="text-capitalize">Smart
                    Informatika</span></h6>
        </div>
        <div class="col">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="{{ asset('assets/mikrotik-slider-1.JPG') }}" class="d-block w-100" alt="Gambar 1">
                    </div>
                    <div class="carousel-item">
                        <img src="{{ asset('assets/mikrotik-slider-2.JPG') }}" class="d-block w-100" alt="Gambar 2">
                    </div>
                    <div class="carousel-item">
                        <img src="{{ asset('assets/mikrotik-slider-3.JPG') }}" class="d-block w-100" alt="Gambar 3">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</div>
@endsection