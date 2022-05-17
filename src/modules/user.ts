export interface CurrentUser {
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  profile: {
    id: string;
    thumbnail: string | null;
    display_name: string;
  };
}
