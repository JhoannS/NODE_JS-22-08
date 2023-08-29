import  { useState } from 'react';

const Employees = () => {
    const [employees, setEmployees] = useState
    ([
        {
        id: 1,
        fullName: "Jhoan Zamudio",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
        },
        {
        id: 2,
        fullName: "Mauricio Corrales",
        designation: "Html Developer",
        gender: "male",
        teamName: "TeamB"
        },
        {
        id: 3,
        fullName: "Maria Camila",
        designation: "React Developer",
        gender: "female",
        teamName: "TeamC"
        },
        {
        id: 4,
        fullName: "Patricia Marin",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
        },
        {
        id: 5,
        fullName: "William Zamudio",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamB"
        },
        {
        id: 6,
        fullName: "Jhoanatan Clay",
        designation: "Angular Developer",
        gender: "female",
        teamName: "TeamC"
        },
        {
        id: 7,
        fullName: "Laura Grimaldo",
        designation: "Python Developer",
        gender: "female",
        teamName: "TeamA"
        },
        {
        id: 8,
        fullName: "Juan Rico",
        designation: "Arduino Developer",
        gender: "male",
        teamName: "TeamB"
        },
        {
        id: 9,
        fullName: "Cristian Cupa",
        designation: "Figma Developer",
        gender: "male",
        teamName: "TeamC"
        },
        {
        id: 10,
        fullName: "Mariana Otalora",
        designation: "MongoDB Developer",
        gender: "female",
        teamName: "TeamA"
        },
        {
        id: 11,
        fullName: "Sebastian Duque",
        designation: "Php Developer",
        gender: "male",
        teamName: "TeamB"
        },
        {
        id: 12,
        fullName: "Lizbeth Rojas",
        designation: "Kotlin Developer",
        gender: "female",
        teamName: "TeamC"
        }
    ]);
    
    return (
        
        <main className='datos'>
            <div className="info">
                 {
                employees.map((employee) => (
                    <p>- {employee.fullName}</p>
                ))
                 }
            </div>
           
        </main>
        
        
    )
    
}
export default Employees             