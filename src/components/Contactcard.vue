<template>
    <div class="contact_card">
        <ul>
            <li v-for="(item,index) in contacts" :key="item.name">
                <div class="card">
                    <div classs="header">{{item.header}}</div>
                    <ul class="list">
                        <li>
                            <div class="item" >
                                <div class="icon">
                                     
                                </div>
                                <p class="text">{{item.email}}</p>
                            </div>
                            <div class="item" >
                                <div class="icon">
                                     
                                </div>
                                <p class="text">{{item.name}}</p>
                            </div>
                            <div class="item" >
                                <div class="icon">
                                     
                                </div>
                                <p class="text">{{item.number}}</p>
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
        name : 'Contactcard',
        data(){
            return{
                contacts : [
                    {
    header: 'John William',
    email: 'abc@mail.com',
    name: 'Sporting Director',
    number: '+1-238-9453',
  },
  {
    header: 'Emily Smith',
    email: 'emily.smith@mail.com',
    name: 'Marketing Manager',
    number: '+1-567-1234',
  },
  {
    header: 'Michael Johnson',
    email: 'michael.johnson@mail.com',
    name: 'Head Coach',
    number: '+1-789-6543',
  },
  {
    header: 'Sarah Brown',
    email: 'sarah.brown@mail.com',
    name: 'Team Doctor',
    number: '+1-345-9876',
  },
  {
    header: 'David Clark',
    email: 'david.clark@mail.com',
    name: 'Fitness Trainer',
    number: '+1-654-3210',
  }
                ]
            }
        }
    }
</script>