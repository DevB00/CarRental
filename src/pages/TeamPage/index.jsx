import Image from "../../components/Image";
import BookACar from "../../components/BookACar";
import person1 from "../../images/team/person1.png";
import person2 from "../../images/team/person2.png";
import person3 from "../../images/team/person3.png";
import person4 from "../../images/team/person4.png";
import person5 from "../../images/team/person5.png";
import person6 from "../../images/team/person6.png";

const TeamMember = ({ member }) => {
  return (
    <div className="flex max-h-[600px] max-w-[320px] flex-col items-center shadow-xl">
      <img
        className="h-full w-full bg-[#f6f6f6]"
        src={member.image}
        alt={member.name}
      />
      <div className="flex flex-col items-center gap-2 py-6">
        <p className="text-2xl font-bold">{member.name}</p>
        <p className="text-lg text-[#777]">{member.role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Luke Miller", role: "Salesman", image: person1 },
    { id: 2, name: "Michael Diaz", role: "Business Owner", image: person2 },
    { id: 3, name: "Briana Ross", role: "Photographer", image: person3 },
    { id: 4, name: "Lauren Rivera", role: "Car Detailist", image: person4 },
    { id: 5, name: "Martin Rizz", role: "Mechanic", image: person5 },
    { id: 6, name: "Caitlyn Hunt", role: "Manager", image: person6 },
  ];

  return (
    <>
      <Image Page="Our Team" />
      <main className="mt-[17.5rem] flex items-center justify-center">
        <div className="bg-gray grid grid-cols-1 items-center justify-center gap-12 px-4 pb-32 pt-20 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </main>
      <BookACar />
    </>
  );
};

export default Team;
