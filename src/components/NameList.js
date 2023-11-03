import { People } from "./People";
export const NameList = () => {
  // const names=['Sindhu','sri','sravani','shramila']
  // return(
  //     <div>
  //         {
  //             names.map((elementOfName,index)=>{
  //                 return <h2 key={index}>{elementOfName}</h2>
  //             })
  //         }
  //     </div>
  // )

  // const names=['Sindhu','sri','sravani','shramila']
  // const namesList=names.map((elementOfName,index)=><h2 key={index}>{elementOfName}</h2>)
  // return(
  //     <div>
  //         {namesList}
  //     </div>
  // )
  // const names=['Sindhu','sri','sravani','shramila']
  // const namesList=names.map((elementOfName,index)=><h2 key={index}>{elementOfName}</h2>)

  const person = [
    {
      id: 1,
      name: "Sindhuja",
      course: ".net",
    },
    {
      id: 2,
      name: "Sravani",
      course: ".net",
    },
    {
      id: 3,
      name: "Sharmila",
      course: ".Java",
    },
  ];
  const personList = person.map((each_person) => (
    // <h2 key={person.id}>{person.name} learning {person.course}</h2>
    <People key={each_person.id} person={each_person} />
  ));
  return (
    <div>
      {/* {persons.map(person)=>{
                return(
                    <h2 key={person.id}>{person.name} learning {person.course}</h2>
                )
            }} */}
      {personList}
    </div>
  );
};
