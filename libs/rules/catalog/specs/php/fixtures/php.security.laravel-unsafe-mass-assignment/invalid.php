<?php
Route::post('/users/{user}', function (Request $request, User $user) {
    $user->update($request->all());
});
