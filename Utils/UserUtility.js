import bcrypt from "bcryptjs";

const UserUtility = {

    /**
     * Method to encrypt user password
     */
    encryptString (password) {
        return bcrypt.hash(password, 10)  // 10 is the salt;
    },

    /**
     * Method to check if password is correct
     */
    isPasswordCorrect(givenPassword, actualPassword) {
        console.log(givenPassword, actualPassword)
        return bcrypt.compare(givenPassword, actualPassword)
    }
}

export default UserUtility;