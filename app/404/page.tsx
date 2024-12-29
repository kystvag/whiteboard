export default function Custom404() {
  console.log("Rendering 404 page");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Denne siden finnes ikke.</p>
    </div>
  );
}
