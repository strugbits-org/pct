export default function Service({ params: { slug } }) {
  if (!slug) {
    return (
      <div className="min-h-screen">
        <h1 className="text-center text-primary text-[36px]">Services</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-primary text-[36px]">Service: {slug}</h1>
    </div>
  );
}
