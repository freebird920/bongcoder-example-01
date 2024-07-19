type PersonProfileType = {
  name: string;
  age: number;
  photoUrl?: string;
  description: string;
};
export default function FamilyPage() {
  const myFamily: PersonProfileType[] = [
    {
      name: "봉우리아버지",
      age: 44,
      description: "아버지는 개발자입니다.",
    },
    {
      name: "봉우리어머니",
      age: 43,
      description: "어머니는 개발자입니다.",
    },
  ];
  return (
    <>
      <h1>가족소개</h1>
      <section className="flex flex-col space-y-2">
        {myFamily.map((person: PersonProfileType, index: number) => {
          return (
            <section
              key={`profile-${index}`}
              className="border-2 rounded-md p-2"
            >
              <p>{person.name}</p>
              <p>{person.age}</p>
              <p>{person.description}</p>
            </section>
          );
        })}
      </section>
    </>
  );
}
