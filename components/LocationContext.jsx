import React, { useState } from "react";

const LocationContext = React.createContext();

const LocationProvider = (props) => {
	const [context, setContext] = useState({
		location: "?lat=57.355333&lon=-2.507852",
		user_id: "448ae798-190a-4352-a793-7013ae2721ac",
		lat: 57.355333,
		lon: -2.507852,
	});
	return (
		<LocationContext.Provider value={[context, setContext]}>
			{props.children}
		</LocationContext.Provider>
	);
};

export { LocationContext, LocationProvider };
