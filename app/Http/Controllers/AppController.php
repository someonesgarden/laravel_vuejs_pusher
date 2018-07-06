<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index(Request $request){
        return view('app');
    }


    public function sent(Request $request){
        event(new \App\Events\Event('テストメッセージ'));
        return view('app');
    }
}
