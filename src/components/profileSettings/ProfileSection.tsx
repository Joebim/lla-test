import InviteLink from "./InviteLink";
import UserSettings from "./UserSettings";

const ProfileSection = () => {
  const inviteLink = "https://www.delveapp.com/invite?referralCode=12345ABCDE";
  return (
    <div className="w-full">
      <UserSettings
        username="John Doe"
        email="johndoe@gmail.com"
        gender="Male"
      />
      <InviteLink inviteLink={inviteLink} />
    </div>
  );
};

export default ProfileSection;
