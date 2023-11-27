@extends('layouts.main')

@section('content')
<div class="position-relative">
    <div class="row w-100 sh position-relative">
        <div class="col-5 bg-main g-1"></div>
        <div class="col-1 bg-sec"></div>
        <div class="col-3 position-relative ps-0 pe-0">
            <p class="gt text-uppercase position-absolute fs-1 sbk-style">smart bengkel komputer</p>
        </div>
        <div class="col-2 bg-main g-2"></div>
        <div class="col-1 bg-sec"></div>
    </div>
    <img class="grafiti-style position-absolute w-100" src="{{  asset('assets/grafiti_sbk.png') }}" alt="Grafiti SBK"
        style="top: 53%">
    <div class="video">
        <video autoplay loop class="position-relative w-100 behind">
            <source src="{{ asset('assets/testing.mp4') }}" type="video/mp4">
            Please update your browser version
        </video>
    </div>
    <p class="text-uppercase position-absolute bottom-0 fs-2 ms-3">
        <span class="sec">bersama</span>
        sbk<br>
        <span class="sec">bangkitkan</span>
        <span>smk</span>
    </p>
    <a href="">
        <p class="bg-main text-uppercase position-absolute bottom-0 end-0 about-us-style">about us</p>
    </a>
</div>
<div>
    
</div>
@endsection