import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

export const protectLoginGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth)
  const router = inject(Router)

  return authState(auth).pipe(
    map((user)=>{
      if (user) {
        router.navigate(['./dashboard'])
        return false
      } else {
        return true
      }
    })
  )
};
