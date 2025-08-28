import { locations } from "@/data/locations";
import LocationCard from "@/components/LocationCard";

export default function Home() {
  return (
    <main className="font-work-sans mr-auto ml-auto max-w-[1440px] px-4 py-20 md:px-8 lg:px-20">
      <div className="pb-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Locations
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(390px,1fr))] justify-items-center gap-x-6 gap-y-9">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </main>
  );
}
