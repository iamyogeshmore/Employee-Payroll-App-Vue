<template>
    <div>
        <header class="header-content header">
            <div class="logo-content">
                <router-link to="/">
                    <img src="../assets//Images/logo.png" alt="logo" />
                </router-link>

                <div>
                    <router-link to="/">
                        <span class="emp-text">EMPLOYEE</span> <br />
                        <span class="emp payroll">PAYROLL</span>
                    </router-link>
                </div>
            </div>
        </header>

        <!-- Emp Payroll Form With Header And Name -->

        <div class="form-content">
            <form class="form" action="#" @submit.prevent="addEmployee">
                <div class="form-head">Update Employee Payroll Form</div>
                <div class="row-content">
                    <label for="name" class="label text">Name</label>
                    <input type="text" v-model="formData.name" class="input" placeholder="Enter Name" required />
                </div>

                <!-- Specify Profile Pic to the Employee Payroll App -->

                <div class="row-content">
                    <label class="label text" for="profile">Profile image</label>
                    <div class="profile-radio-content">
                        <label>
                            <input type="radio" id="profile1" name="profile"
                                value="../assets/Profile-Images/Ellipse -01.png" v-model="formData.profilePic" required />
                            <img class="profile" id="image1" src="../assets/Profile-Images/Ellipse -01.png" />
                        </label>

                        <label>
                            <input type="radio" id="profile2" name="profile"
                                value="../assets/Profile-Images/Ellipse -02.png" v-model="formData.profilePic" required />
                            <img class="profile" id="image2" src="../assets/Profile-Images/Ellipse -02.png" />
                        </label>

                        <label>
                            <input type="radio" id="profile3" name="profile"
                                value="../assets/Profile-Images/Ellipse -03.png" v-model="formData.profilePic" required />
                            <img class="profile" id="image3" src="../assets/Profile-Images/Ellipse -03.png" />
                        </label>

                        <label>
                            <input type="radio" id="profile4" name="profile"
                                value="../assets/Profile-Images/Ellipse -04.png" v-model="formData.profilePic" required />
                            <img class="profile" id="image4" src="../assets/Profile-Images/Ellipse -04.png" />
                        </label>
                    </div>
                </div>

                <!-- Employee Payroll Form with Gender, Department and Salary Range -->

                <div class="row-content">
                    <!-- Gender -->
                    <label class="label text" for="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="Male" v-model="formData.gender" />
                        <label class="text" for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="Female" v-model="formData.gender" />
                        <label class="text" for="female">Female</label>
                    </div>
                </div>

                <div class="row-content">
                    <!-- Department -->
                    <label class="label text" for="department">Department</label>
                    <div>
                        <input class="checkbox" type="checkbox" id="hr" name="department" value="HR"
                            v-model="formData.department" />
                        <label class="text" for="hr">HR</label>
                        <input class="checkbox" type="checkbox" id="sales" name="department" value="Sales"
                            v-model="formData.department" />
                        <label class="text" for="sales">Sales</label>
                        <input class="checkbox" type="checkbox" id="finance" name="department" value="Finance"
                            v-model="formData.department" />
                        <label class="text" for="finance">Finance</label>
                        <input class="checkbox" type="checkbox" id="engineer" name="department" value="Engineer"
                            v-model="formData.department" />
                        <label class="text" for="engineer">Engineer</label>
                        <input class="checkbox" type="checkbox" id="others" name="department" value="Others"
                            v-model="formData.department" />
                        <label class="text" for="others">Others</label>
                    </div>
                </div>

                <div class="row-content">
                    <!-- Salary Range -->
                    <label class="label text" for="salary">Choose Your Salary: </label>
                    <input class="input" type="range" name="salary" id="salary" min="300000" max="500000" step="100"
                        v-model="formData.salary" required />
                    <output class="salary-output text" for="salary"></output>
                    <label class="label text" for="salary">Salary: </label>
                    <input class="input" type="text" name="salary" id="salary" min="300000" max="500000" step="100"
                        v-model="formData.salary" required />
                    <output class="salary-output text" for="salary"></output>
                </div>

                <!-- Employee Payroll Form with start date -->

                <div class="row-content">
                    <label class="label text" for="startDate">Start Date</label>
                    <div>
                        <select id="day" v-model="formData.day">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>&nbsp
                        <select id="month" name="Month" v-model="formData.month">
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>&nbsp
                        <select id="year" name="Year" v-model="formData.year">
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <!-- Ability to add Notes and Button -->

                <div class="row-content">
                    <label class="label text" for="notes">Notes</label>
                    <textarea id="notes" class="input" name="Notes" v-model="formData.note" placeholder="Add Notes Here..."
                        style="height: 100px"></textarea>
                </div>
                <div class="buttonParent">
                    <router-link to="/">
                        <a href="" class="resetButton button cancelButton">Cancel</a>
                    </router-link>
                    <div class="submit-reset">
                        <button type="submit" class="button submitButton" id="submitButton">
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import EmployeeService from '../Service/EmployeeService';
export default {
    name: "EditForm",
    data() {
        return {
            formData: {
                id: "",
                name: "",
                salary: "",
                note: "",
                day: "",
                month: "",
                year: "",
                department: [],
                gender: "",
                profilePic: "",
                startDate: "",
            },
        };
    },
    methods: {
        addEmployee(event) {
            event.preventDefault();

            this.formData.startDate =
                this.formData.day + this.formData.month + this.formData.year;
            const data = this.formData;

            EmployeeService.updateEmployee(this.formData.id, this.formData)
                .then((response) => {
                    console.log(response.data.data);
                    this.employees = response.data.data;
                    alert("Employee Update Successfully!!", response);
                    this.$router.push({ name: "Home" });
                })
                .catch((error) => {
                    console.log(error);
                    alert("WARNING!! Error while edting the data!");
                });
        },
        getEmployeeById(id) {
            EmployeeService.getEmployee(id)
                .then((response) => {
                    let object = response.data.data;
                    this.setData(object);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        setData(obj) {
            console.log(obj);
            let array = obj.startDate;
            console.log(array);
            this.formData.id = obj.id;
            this.formData.name = obj.name;
            this.formData.department = obj.department;
            this.formData.day = array[0] + array[1];
            this.formData.month = array[2] + array[3] + array[4];
            this.formData.year = array[5] + array[6] + array[7] + array[8];
            this.formData.note = obj.note;
            this.formData.gender = obj.gender;
            this.formData.salary = obj.salary;
            this.formData.profilePic = obj.profilePic;
            console.log(this.formData);
        },
    },
    created() {
        this.getEmployeeById(this.$route.params.id);
    },
};
</script>

<style>
body {
    margin: 0;
    height: 100%;
}

.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: solid 0px #42515f;
}

.emp-text {
    font: normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}

.emp-payroll {
    color: #42515f;
}

* {
    box-sizing: border-box;
}

/* Emp Payroll Form With Header And Name --> */

.form-content {
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.form {
    width: 65%;
    padding: 44px 60px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    opacity: 1;
}

.form-head {
    font: normal normal bold 28px/37px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    text-transform: capitalize;
    opacity: 1;
    padding-bottom: 20px;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}

.label {
    min-width: 140px;
}

label {
    padding: 12px 12px 12px 0px;
    display: inline-block;
}

.text {
    font-size: 16px;
    color: #43515f;
    opacity: 1;
    font-family: Roboto;
}

.input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

/* <!-- Specify Profile Pic to the Employee Payroll App --> */

.profile-radio-content {
    display: flex;
    flex-direction: row;
}

.profile-radio-content>label {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.profile {
    width: 40px;
    border-radius: 50%;
    margin-left: 12px;
}

/* <!-- Employee Payroll Form with start date --> */

select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    background-color: transparent;
}

/* <!-- Ability to add Notes and Button --> */

.buttonParent {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    margin-top: 20px;
}

.button {
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: #f7f7f7 0% 0% no-repeat padding-box;
    border: 2px solid #969696;
    border-radius: 5px;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
}

/* set the button style appropriately */

.submitButton {
    background-color: #f5f5f5;
    margin-right: 30px;
}

.cancelButton {
    text-decoration: none;
    text-align: center;
}
</style>
