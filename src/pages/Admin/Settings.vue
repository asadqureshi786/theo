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
                    <FileUpload mode="basic" @select="onFileSelect"   chooseLabel="Upload Profile"  customUpload auto severity="secondary" class="p-button-outlined upload_profile_button" />
                </div>
            </div>
            <div class="col-md-9">
                <div class="row formFileds">
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="update_button">
                            <button class="btn btn-primary">
                                <i class="pi pi-save" ></i>
                                Update</button>
                        </div>
                    </div>
               </div>

        <hr></hr>

         <div class="row formFileds">
          <div class="col-md-4">
            <div class="form-group password">
              <label>Current Password</label>
              <input :type="showPass ? 'text' : 'password'" class="form-control" />
               <span class="password" @click="showPass=!showPass" >
                <i  class="pi" :class="showPass ? 'pi-eye-slash' : 'pi-eye'" ></i>
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group password">
              <label>New Password</label>
              <input :type="newPass ? 'text' : 'password'" class="form-control" />
               <span class="password" @click="newPass=!newPass" >
                <i  class="pi" :class="newPass ? 'pi-eye-slash' : 'pi-eye'" ></i>
              </span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group password">
              <label>Confirm Password</label>
              <input :type="confirmPass ? 'text' : 'password'" class="form-control" />
               <span class="password" @click="confirmPass=!confirmPass" >
                <i  class="pi" :class="confirmPass ? 'pi-eye-slash' : 'pi-eye'" ></i>
              </span>
            </div>
            </div>
          <div class="col-md-12">
            <div class="update_button">
                <button class="btn btn-primary">
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

import dp from "@/assets/images/dp.png"
export default {
  name: "Settings",
  data(){
    return{
        showPass : true,
        newPass : true,
        confirmPass : true,
        src : dp,
    }
  },
    methods: {
        onFileSelect(event) {
            const file = event.files[0];
            const reader = new FileReader();

            reader.onload = async (e) => {
                this.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    }
};
</script>
