<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function userSignIn(Request $request): JsonResponse
    {
        $user = User::where("email", $request->email)->first();

        if (!$user) {
            return response()->json([
                "message" => "User not found"
            ]);
        }



        if ($this->isValidateUserCredentials($request->all(), $user)) {
            return response()->json([
                "user_id" => $user->id,
                "user_role" => 1,
                // Create a new API token for the user
                // createToken("testToken", ["server:admin"]) means:
                //   - "testToken" = token name (you can use any string)
                //   - ["server:admin"] = abilities/permissions this token has 
                //     This means the token is allowed to act as an admin on the server.
                // plainTextToken → gives the actual token string that can be used in API requests
                "user_token" => $user->createToken("testToken", ["server:admin"])->plainTextToken,
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
