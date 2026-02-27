import { inject } from '@angular/core';
import { Auth, authState, user } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

export const protectDashbordGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth)
  const router = inject(Router)
  
  return authState(auth).pipe(
    map(user => {
      if (user) {
        return true
      } else {
        router.navigate(['./login'])
        return false        
      }
    })
  )
};
