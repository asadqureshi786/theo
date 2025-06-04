<template>
  <div class="setting_page">
     <!-- PAGE HEADER WITH TABS -->
    <div class="page_header">
      <h3 class="hd">Settings</h3>
      <div class="r_side">
        <!-- Tab Headers -->
      </div>
    </div>

    <div class="card mt-4">
      <div class="card-body">
     
        <div class="row">
            <div class="col-md-3">
                <div class="profile_image_upload">
                    <img v-if="src" :src="src" alt="Image" class="shadow-md rounded-xl img-fluid" />
                    <FileUpload mode="basic" @select="onFileSelect" chooseLabel="Upload Profile"  customUpload auto severity="secondary" class="p-button-outlined upload_profile_button" />
                </div>
            </div>
            <div class="col-md-9">
                <div class="row formFileds">
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="general.name" class="form-control" />
                          <small v-if="errors.name" class="text-danger validate">{{errors.name[0]}}</small>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Email</label>
                        <input type="email" v-model="general.email" class="form-control" />
                        <small v-if="errors.email" class="text-danger validate">{{errors.email[0]}}</small>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Country</label>
                        <input type="text" v-model="general.country" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                        <label>Address</label>
                        <input type="text" v-model="general.address" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="update_button">
                            <button type="submit" class="btn btn-primary spinner" @click.prevent="updateGeneral" >
                             <Spinner v-if="loading" />
                                <i  v-if="!loading" class="pi pi-save" ></i>
                                Update</button>
                        </div>
                    </div>
               </div>

        <hr></hr>

         <div class="row formFileds">
          <div class="col-md-4">
            <div class="form-group password">
              <label>Current Password</label>
              <input :type="showPass ? 'text' : 'password'" class="form-control" v-model="security.current_password" />
               <span class="password" @click="showPass=!showPass" >
                <i  class="pi" :class="showPass ? 'pi-eye-slash' : 'pi-eye'" ></i>
              </span>
              <small v-if="errors.current_password" class="text-danger validate">{{errors.current_password[0]}}</small>
              <small v-if="crurrentError" class="text-danger validate">{{crurrentError}}</small>


            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group password">
              <label>New Password</label>
              <input :type="newPass ? 'text' : 'password'" class="form-control" v-model="security.new_password" />
               <span class="password" @click="newPass=!newPass" >
                <i  class="pi" :class="newPass ? 'pi-eye-slash' : 'pi-eye'" ></i>
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group password">
              <label>Confirm Password</label>
              <input :type="confirmPass ? 'text' : 'password'" class="form-control" v-model="security.password_confirmation"  />
               <span class="password" @click="confirmPass=!confirmPass" >
                <i  class="pi" :class="confirmPass ? 'pi-eye-slash' : 'pi-eye'" ></i>
              </span>
             <small v-if="errors.new_password" class="text-danger validate">{{errors.new_password[0]}}</small>

            </div>
            </div>
          <div class="col-md-12">
            <div class="update_button">
                <button type="submit" class="btn btn-primary" @click.prevent = "updatePassword" >
                    <i class="pi pi-save" ></i>
                    Update</button>
            </div>
          </div>
        </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

// Images
import dp from "@/assets/images/dp.png"


// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// import Axios
import axios from "axios";
export default {
  name: "Settings",
    components: {
  Spinner,
  },
  data(){
    return{
        showPass : true,
        newPass : true,
        confirmPass : true,
        src : dp,
        token : '',
        loading : false,
        selectedFile : null,
        general : {
          name : "",
          email : "",
          country : "",
          address : "",
        },
        security : {
          current_password : '',
          new_password : '',
          password_confirmation : '',
        },
        crurrentError : '',
        errors : {
          name : '',
          email : '',
          new_password : '',
          current_password : '',
          msg : '',
        }
    }
  },
    mounted() {
      this.token = localStorage.getItem("token");
      if (!this.token) {
          this.$router.push({ path: "/login" });
      }
      this.getUserInfo();
    },

    methods: {
        onFileSelect(event) {
            const file = event.files[0];
            const reader = new FileReader();

            reader.onload = async (e) => {
                this.src = e.target.result;
            };
            this.selectedFile = event.files[0]; 

            reader.readAsDataURL(file);
        },

        // Getting User Info JS Start
        async getUserInfo() {
          this.loading = true;
          try {
            const response = await axios.get(this.$baseURL+"theo/api/admin/me",{
              headers: {
                'Accept' : 'application/json',
                Authorization: `Bearer ${this.token}`, 
              },
            });
            console.log( this.$baseURL+"theo/public/uploads/images/"+response.data.user.profile )
            if(response.status == 200){
             this.general = {...response.data.user};
              this.src = this.$baseURL+"theo/public/uploads/images/"+response.data.user.profile ? this.$baseURL+"theo/public/uploads/images/"+response.data.user.profile : dp;
              this.loading = false;
            }
          } catch (error) {
            this.loading = false;
            toast.error("Failed to fetch user info");
          }
        },
        // Getting User Info JS End

        // Update General JS Start
         async updateGeneral(){
          // console.log("Running")
          this.loading = true;
          this.errors = {};

          const formData = new FormData();
          formData.append('name', this.general.name);
          formData.append('email', this.general.email);
          formData.append('country', this.general.country);
          formData.append('address', this.general.address);
          formData.append('profile', this.selectedFile); // image file

             try {
              const response = await axios.post(this.$baseURL+"theo/api/admin/settings/update-profile",formData,{
                  headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${this.token}`, 
                  },
                }
              )
              if(response.status == 200){
                toast.success("Profile Update Successfully");
                this.getUserInfo();
                this.loading = false;
                  this.general = {
                    name : "",
                    email : "",
                    country : "",
                    address : "",
                    profile : "",
                  };
              }
              
            } catch (error) {
              this.loading = false;
              this.errors = error.response.data.errors;
            }
        },
        // Update General JS Start


        // Update Password JS Start
        async updatePassword(){
          try{
            const response = await axios.post(this.$baseURL+`theo/api/admin/settings/change-password`,this.security,{
                  headers: {
                  'Accept' : 'application/json',
                  Authorization: `Bearer ${this.token}`, 
                },
            })
            if(response.status == 200){
              toast.success("Password Updated Successfully");
              this.security = {
                  current_password : '',
                  new_password : '',
                  password_confirmation : '', 
              }
            }
          }catch(error){
            if(error.response.data.errors){
            this.errors = error.response.data.errors;
            this.crurrentError = '';
            }else if(error.response.data.current_error){
              this.errors = {};
              this.crurrentError = error.response.data.current_error
            }
            else{
              toast.error("error")
            }
          }
        }
        // Update Password JS End


    }
};
</script>
