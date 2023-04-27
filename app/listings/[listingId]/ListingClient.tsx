import { SafeUser, safeListing } from "@/app/types";
import { Reservation } from "@prisma/client";

interface ListingClientProps {
  reservation?: Reservation[];
  listing: safeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}
const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  return <div>ListingClient</div>;
};

export default ListingClient;
