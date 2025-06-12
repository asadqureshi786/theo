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
