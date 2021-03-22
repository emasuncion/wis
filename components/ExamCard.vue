<template>
  <v-container id="wis-exam-container">
    <div id="wis-exam-header" class="text-center">
      Open Exams
    </div>
    <v-row no-gutters>
      <v-col
        v-for="subject in subjects"
        :key="subject.name"
        cols="12"
        sm="4"
      >
        <v-card
          id="wis-exam-card"
          class="mx-auto my-8"
          max-width="344"
        >
          <v-card-text>
            <div id="wis-exam-name-exam">
              {{ subject.exam }}
            </div>
            <p id="wis-exam-description" class="py-6">
              {{ subject.description }}
            </p>
          </v-card-text>
          <v-card-actions class="px-5">
            <span
              id="wis-exam-subject"
              class="mr-auto"
            >
              {{ subject.name }}
            </span>
            <v-btn
              id="wis-exam-start-button"
              class="ml-auto"
              text
            >
              Start Exam
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ExamCard',

  data () {
    return {
      subjects: [
        {
          name: 'IS 215',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            'Aenean ac augue dui. Nullam quis diam sit amet magna maximus elementum' +
            'volutpat eget purus.',
          exam: 'Midterms'
        },
        {
          name: 'IS 226',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            'Aenean ac augue dui. Nullam quis diam sit amet magna maximus elementum' +
            'volutpat eget purus.',
          exam: 'Finals'
        },
        {
          name: 'CMSC 209',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            'Aenean ac augue dui. Nullam quis diam sit amet magna maximus elementum' +
            'volutpat eget purus.',
          exam: 'Midterms'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #wis-exam {
    &-header {
      font-size: $title;
      font-weight: bold;
      margin-top: 70px;
    }

    &-name-exam {
      font-size: $subheader;
      font-weight: bold;
      text-decoration: underline;
    }

    &-description {
      font-size: $large-body;
    }
  }
</style>
