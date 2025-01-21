// RegionFilter.jsx
const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  return (
    <Form.Select
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
      className="w-48"
    >
      {regions.map(region => (
        <option key={region} value={region.toLowerCase()}>
          {region}
        </option>
      ))}
    </Form.Select>
  );
};

export { CountryCard, Login, Navbar, RegionFilter };