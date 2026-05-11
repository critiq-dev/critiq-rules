<?php
Route::post('/users/{user}', function (UpdateUserRequest $request, User $user) {
    $user->update($request->only(['name', 'phone']));
});
