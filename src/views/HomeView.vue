<template>
  <div class="px-4 py-5 my-5 text-center">
    <img
      class="d-block mx-auto mb-4"
      src="@/assets/image/bionic.png"
      alt=""
      width="200"
      height="100"
    />
    <h1 class="display-5 fw-bold text-success">PT Bionic Teknologi Indonesia</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
        popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
        system, extensive prebuilt components, and powerful JavaScript plugins.
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <ButtonComponent color="success" size="sm" label="Get Started" class="px-4 gap-3" />
        <ButtonComponent color="outline-success" size="sm" label="Download" class="px-4" />
      </div>
    </div>
    <div class="p-4 text-warning">
      <h2>We Are Hiring</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <template v-for="data in bionic" :key="data.id">
        <div class="col">
          <CardComponent @click="click(data)" :Title="data.title" Text="Baju">
            <template #button>
              <ButtonComponent
                textColor="light"
                color="warning"
                size="sm"
                label="See Job"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </template>
          </CardComponent>
        </div>
      </template>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Urgent Hiring</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h4 class="text-success">
            {{ modalData.title }}
          </h4>
          <h5>Job Description:</h5>
          <p v-for="data in modalData.description" :key="data.id">
            {{ data }}
          </p>
          <h5>Skill:</h5>
          <ul>
            <li v-for="data in modalData.ptJobSkills" :key="data.id">
              {{ data.name }}
            </li>
          </ul>
          <h5>Send Your Application Job:</h5>
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <LabelComponent text="Your Name" />
              <InputField v-model="form.displayName" placeholder="Enter Your Name" />
            </div>
            <div class="col">
              <LabelComponent text="Email" />
              <InputField v-model="form.email" placeholder="Email Address" />
            </div>
            <div class="col">
              <LabelComponent text="Mobile Number" />
              <InputField v-model="form.phone" placeholder="Mobile Number" />
            </div>
            <div class="col mb-3">
              <LabelComponent text="Message" />
              <InputField v-model="form.message" placeholder="Write Your Message Here" />
            </div>
          </div>
          <LabelComponent text="File CV" />
          <InputField @change="chooseFile" Tipe="file" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="postData">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LabelComponent from '../components/partials-components/LabelComponent.vue'
import InputField from '../components/partials-components/InputField.vue'
import json from '@/assets/image/bti.json'
import CardComponent from '../components/partials-components/CardComponent.vue'
import ButtonComponent from '@/components/partials-components/ButtonComponent.vue'
import axios from 'axios'
export default {
  data() {
    return {
      bionic: json,
      modalData: {
        description: {
          txt: ''
        },
        ptJobSkills: []
      },
      form: {
        displayName: 'test',
        subject: 'Marketting Planner',
        email: 'ar@bti.id',
        phone: '+1111',
        message: 'test',
        ptJobApplyType: 'APPLICATION',
        isActive: 'false',
        ptJobPost: {
          id: 1
        }
      },
      file: null
    }
  },
  components: {
    ButtonComponent,
    CardComponent,
    InputField,
    LabelComponent
  },
  computed: {
    formData() {
      const formData = new FormData()

      formData.append('displayName', this.form.displayName)
      formData.append('subject', this.form.subject)
      formData.append('email', this.form.email)
      formData.append('phone', this.form.phone)
      formData.append('message', this.form.message)
      formData.append('ptJobApplyType', this.form.ptJobApplyType)
      formData.append('isActive', this.form.isActive)
      formData.append('id', this.form.ptJobPost.id)
      formData.append('file', this.file)

      return formData
    }
  },
  created() {
    this.getData(), this.getDataa()
  },
  methods: {
    getData() {
      let type = 'getData'
      let url = ['no-auth', []]
      this.$store.dispatch(type, url).then((response) => {
        console.log(response)
      })
    },
    getDataa() {
      axios
        .get('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth')
        .then((response) => {
          console.log(response)
        })
    },
    click(id) {
      console.log(id)
      this.modalData = id
    },
    postData() {
      const allowedFormats = ['application/pdf']
      const file = this.file
      const maxSizeInBytes = 5 * 1024 * 1024

      if (file && allowedFormats.includes(file.type)) {
        if (file.size <= maxSizeInBytes) {
          this.$store
            .dispatch('postDataUpload', ['no-auth', this.formData])
            .then((result) => {
              console.log(result)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('file terlalu besar')
        }
      } else {
        console.log('Maaf, format yang diperbolehkan hanya pdf')
      }
    },
    chooseFile(event) {
      this.file = event.target.files[0]
    }
  }
}
</script>
