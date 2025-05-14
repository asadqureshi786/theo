<template>
  <div class="contact_card">
    <ul class="main_parent">
      <li v-for="(item, index) in contacts" :key="item.name">
        <div class="card">
          <div class="header primaryCol fw5">{{ item.header }}</div>
          <ul class="list">
            <li>
              <div class="item">
                <div class="icon">
                  <i class="pi pi-envelope"></i>
                </div>
                <p class="text">{{ item.email }}</p>
              </div>
            </li>
            <li>
              <div class="item">
                <div class="icon">
                  <i class="pi pi-user"></i>
                </div>
                <p class="text">{{ item.name }}</p>
              </div>
            </li>
            <li>
              <div class="item">
                <div class="icon">
                  <i class="pi pi-phone"></i>
                </div>
                <p class="text">{{ item.number }}</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contactcard",
  data() {
    return {
      contacts: [
        {
          header: "John William",
          email: "abc@mail.com",
          name: "Sporting Director",
          number: "+1-238-9453",
        },
        {
          header: "Emily Smith",
          email: "emily.smith@mail.com",
          name: "Marketing Manager",
          number: "+1-567-1234",
        },
        {
          header: "Michael Johnson",
          email: "michael.johnson@mail.com",
          name: "Head Coach",
          number: "+1-789-6543",
        },
        {
          header: "Sarah Brown",
          email: "sarah.brown@mail.com",
          name: "Team Doctor",
          number: "+1-345-9876",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/style/assets.scss";
.contact_card {
  .main_parent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    li {
      .card {
        border: 1.5px solid$border1;
        .header {
          border-bottom: 1.5px solid $border1;
          margin: 15px 15px 0px 15px;
          padding-bottom: 5px;
        }
        .list {
          margin-block: 15px;
          li{
            margin-bottom: 10px;
            &:last-child{
                margin-bottom: 0px;
            }
            .item {
              padding: 0px 18px;
              display: flex;
              align-items: center;
              gap: 10px;
              .icon {
                background: $primaryLight2;
                width: 35px;
                height: 35px;
                border-radius: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                  color: #4a0d0c7a;
                  font-size: 14px;
                  font-weight:500
                }
              }
              .text{
                color:$light6;
                font-size:13.5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
