<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/screeniehost.png',
    name: 'could be you?',
    title: 'wanna become a sponsor to our project?',
    // links: [
    //   { icon: 'github', link: 'https://github.com/screeniehost' }
    // ]
  }
]
</script>

# Sponsors
these users sponsored our project to help it grow over time

<VPTeamMembers size="small" :members="members" />