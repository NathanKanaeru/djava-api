// pages/penguins.js
import Head from 'next/head';

export default function Penguins() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-400 min-h-screen p-6">
      <Head>
        <title>Penguin Report</title>
      </Head>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Penguins
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Penguins are a group of aquatic, flightless birds that primarily
          inhabit the Southern Hemisphere, particularly Antarctica. Some
          species can also be found on the coasts of South America, Africa,
          Australia, and New Zealand. They have unique black and white coloring,
          which helps camouflage them while swimming. The dark back and white
          belly make them less visible to predators above and below the water.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Penguins are well-adapted to cold environments due to their thick
          layer of fat under their skin and a dense layer of feathers that
          provide insulation. Their wings have evolved into flippers, allowing
          them to be efficient swimmers. Penguins can reach speeds of up to 15
          miles per hour in the water, making them excellent hunters.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">
          Diet and Social Behavior
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Diet-wise, penguins primarily feed on fish, squid, and krill, small
          crustaceans found in ocean waters. They have excellent eyesight that
          allows them to see clearly underwater, which is essential for
          hunting. Penguins can dive to significant depths and stay submerged
          for several minutes, depending on the species, to catch prey.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Socially, penguins are known for their strong communal bonds and tend
          to live in large colonies, which can help protect them from
          predators. During the breeding season, many species gather in massive
          groups called rookeries. Mating pairs often stay together throughout
          the breeding season, and some species form lifelong pairs.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">
          Breeding and Family Life
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Penguins usually lay one or two eggs, which both parents take turns
          incubating, using their warm bellies and webbed feet. Once the eggs
          hatch, both parents share the responsibilities of feeding and
          protecting the young.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
          Fascinating Facts about Penguins
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Penguins primarily live in the Southern Hemisphere.</li>
          <li>They use their flippers to propel themselves through water.</li>
          <li>Penguins primarily eat fish, squid, and krill.</li>
          <li>Both parents care for their eggs and young chicks.</li>
          <li>Penguins are known for their distinctive waddling walk.</li>
        </ul>

        <div className="text-center mt-10">
          <p className="text-gray-600">Want to learn more about these amazing creatures?</p>
          <button className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition duration-200">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
