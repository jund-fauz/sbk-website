@extends('layouts.main')

@section('content')
<div class="row w-100" style="height: 500px">
    <div class="col-5 bg-main"></div>
    <div class="col-1 bg-sec"></div>
    <div class="col-3 position-relative ps-0 pe-0">
        <p class="gt text-uppercase position-absolute fs-1 sbk-style">smart bengkel komputer</p>
    </div>
    <div class="col-2 bg-main"></div>
    <div class="col-1 bg-sec"></div>
</div>
<div class="grafiti-style w-100">
    <img width="100%" src="{{  asset('assets/grafiti_sbk.png') }}" alt="Grafiti SBK">
</div>
@endsection