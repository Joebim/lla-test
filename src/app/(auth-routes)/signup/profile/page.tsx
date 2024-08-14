import { cookies } from 'next/headers';
import ProfilePage from '../../../../components/common/profilepage/profilePage';

const Page = async () => {
  const token = cookies().get('authjs.session-token')?.value;
  return <ProfilePage token={token} />;
};

export default Page;
