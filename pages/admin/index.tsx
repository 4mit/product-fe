import React from 'react';
import { withAuthUser, AuthAction } from 'next-firebase-auth';
import FirebaseAuth from '../../components/FirebaseAuth';

const Admin = () => (
  <div className="h-screen">
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <FirebaseAuth />
      <div className="p-4">© Online learners</div>
    </div>
  </div>
);

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Admin);
