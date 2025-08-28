export async function getCoordinates(city) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`
  );
  const data = await res.json();
  if (!data || data.length === 0) throw new Error("City not found");
  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
}
