type UserCardProps = {name : string, age : number , isStudent ?: boolean};

const UserCard = ({name, age, isStudent = false} : UserCardProps) => {

    return (
        <p>
            {name}   is {isStudent ? "student" : "not a student" }  is {age}  years old.
        </p>
    )
}

export default UserCard;