import Navbar from "@/components/Navbar";

export default function Schools() {
  return (
    <div>
      <Navbar />

      <section className="p-10">
        <h1 className="text-3xl font-bold">
          STEM Solutions for Schools
        </h1>

        <h2 className="mt-6 text-xl font-semibold">Problems</h2>
        <ul className="list-disc ml-6">
          <li>No practical learning</li>
          <li>Outdated curriculum</li>
          <li>No innovation exposure</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Our Solution</h2>
        <ul className="list-disc ml-6">
          <li>Hands-on workshops</li>
          <li>STEM labs</li>
          <li>Project-based learning</li>
        </ul>

        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded">
          Book School Demo
        </button>
      </section>
    </div>
  );
}