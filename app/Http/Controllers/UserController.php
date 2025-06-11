<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(Request $request):JsonResponse
    {
        $user = User::where("email", $request->email)->first();

        if(!$user){
            return response()->json([
                "message" => "User not found"
            ]);
        }



        if($this->isValidateUserCredentials($request->all(), $user))
        {
            return response()->json([
                "message" => "User found",
                "user_token" => $user->createToken("Test Token", ["server:admin"])->plainTextToken,
            ]);
        }

        return response()->json([
            "message" => "User credentials not found"
        ]);

    }

    public function isValidateUserCredentials(array $request, User $user): bool
    {
        return $user->email === $request['email'] && Hash::check($request['password'], $user['password']);
    }
}
