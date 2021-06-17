export default ({ lat, lng }, { latitude, longitude }) => {
  if (lat) {
    const dLat = ((lat - latitude) * Math.PI) / 180;
    const dLng = ((lng - longitude) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat * Math.PI) / 180) *
        Math.cos((latitude * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = 3958.756 * c;
    return d;
  }
};
