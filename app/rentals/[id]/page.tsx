
//import getCurrentUser from "@/app/actions/getCurrentUser";
//import getListingById from "@/app/actions/getListingById";
//import getReservations from "@/app/actions/getReservations";

//import ClientOnly from "@/app/components/ClientOnly";
//import EmptyState from "@/app/components/EmptyState";

import RentalMainComp from "@/src/modules/rentals/components/RentalMainComp";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  // const listing = await getListingById(params);
  // const reservations = await getReservations(params);
  // const currentUser = await getCurrentUser();

  // if (!listing) {
  //   return (
  //     <ClientOnly>
  //       <EmptyState />
  //     </ClientOnly>
  //   );
  // }

  return (
    // <ClientOnly>
      <RentalMainComp
        // listing={listing}
        // reservations={reservations}
        // currentUser={currentUser}
      />
    // </ClientOnly>
  );
}
 
export default ListingPage;