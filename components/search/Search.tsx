"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type SearchProps = {
  fromList?: boolean;
  destination?: string;
  checkin?: string;
  checkout?: string;
};

type SearchState = {
  destination: string;
  checkin: string;
  checkout: string;
};

const Search: React.FC<SearchProps> = ({
  fromList,
  destination,
  checkin,
  checkout,
}) => {
  const [searchTerm, setSearchTerm] = useState<SearchState>({
    destination: destination || "Puglia",
    checkin: checkin || "",
    checkout: checkout || "",
  });

  const [allowSearch, setAllowSearch] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value;

    const state = { ...searchTerm, [name]: value };

    if (
      new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
    ) {
      setAllowSearch(false);
    } else {
      setAllowSearch(true);
    }

    setSearchTerm(state);
  };

  const doSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    params.set("destination", searchTerm?.destination);

    if (searchTerm?.checkin && searchTerm?.checkout) {
      params.set("checkin", searchTerm?.checkin);
      params.set("checkout", searchTerm?.checkout);
    }

    if (pathname.includes("hotels")) {
      replace(`${pathname}?${params.toString()}`);
    } else {
      replace(`${pathname}hotels?${params.toString()}`);
    }
  };

  return (
    <>
      <div className="lg:max-h-[250px] mt-6">
        <div
          id="searchParams"
          className={fromList ? "!shadow-none" : undefined}
        >
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                name="destination"
                id="destination"
                defaultValue={searchTerm?.destination}
                onChange={handleInputs}
              >
                <option value="Puglia">Puglia</option>
                <option value="Catania">Catania</option>
                <option value="Palermo">Palermo</option>
                <option value="Frejus">Frejus</option>
                <option value="Paris">Paris</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                onChange={handleInputs}
                defaultValue={searchTerm?.checkin}
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                onChange={handleInputs}
                defaultValue={searchTerm?.checkout}
              />
            </h4>
          </div>
        </div>
      </div>

      <button onClick={doSearch} disabled={!allowSearch} className="search-btn">
        🔍️ {fromList ? "Modify Search" : "Search"}
      </button>
    </>
  );
};

export default Search;
