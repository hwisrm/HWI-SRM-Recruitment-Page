import supabase from './client.js';

async function insertUsers() {
    
    const { data, error } = await supabase
  .from('users')
  .insert([
    { 
      full_name: document.getElementById('fullName').value, 
      reg_number: document.getElementById('regNumber').value, 
      personal_email: document.getElementById('personalEmail').value, 
      official_email: document.getElementById('officialEmail').value, 
      phone_number: document.getElementById('phone').value, 
      current_year: document.getElementById('currentYear').value, 
      course: document.getElementById('course').value, 
      branch: document.getElementById('branch').value,
      specialization: document.getElementById('specialization').value,
      section: document.getElementById('sec').value,
    },
  ])
  .select()

}

async function inserttechTeam() {
    
  const { data, error } = await supabase
.from('technical_team')
.insert([
  { 
      sub_technical_genre: document.getElementById('techRole').value,
      resume_link: document.getElementById('resumeLink').value,
      github_link: document.getElementById('githubLink').value,
      linkedin_link: document.getElementById('linkedinLink').value,
      portfolio_link: document.getElementById('portfolioLink').value,
  },
])
.select()

}

async function insertcontentTeam() {
    
  const { data, error } = await supabase
.from('content_team')
.insert([
  { 
    portfolio_link: document.getElementById('portfolioLink').value,
    linkedin_link: document.getElementById('linkedinLink').value,
    twitter_link: document.getElementById('twitterLink').value,
    instagram_link: document.getElementById('instagramLink').value,
  },
])
.select()

}

async function insertsocialmediaTeam() {
    
  const { data, error } = await supabase
.from('social_media_team')
.insert([
  { 
    portfolio_link: document.getElementById('portfolioLink').value,
    linkedin_link: document.getElementById('linkedinLink').value,
    twitter_link: document.getElementById('twitterLink').value,
    instagram_link: document.getElementById('instagramLink').value,
    discord_link: document.getElementById('discordLink').value,  

  },
])
.select()

}

async function insertdesignTeam() {
  const designToolElement = document.getElementById('designTool');
  const selectedTools = Array.from(designToolElement.selectedOptions).map(option => option.value);
  const designToolStr = selectedTools.join(',');

  const { data, error } = await supabase
    .from('design_team')
    .insert([
      { 
        portfolio_link: document.getElementById('portfolioLink').value,
        design_tool: designToolStr,
      },
    ])
    .select();
}


async function inserteditingTeam() {
  const editingToolElement = document.getElementById('editingTool');
  const selectedTools = Array.from(editingToolElement.selectedOptions).map(option => option.value);
  const editingToolStr = selectedTools.join(',');

  const { data, error } = await supabase
    .from('editing_team')
    .insert([
      { 
        portfolio_link: document.getElementById('portfolioLink').value,
        editing_tool: editingToolStr,
      },
    ])
    .select();
}
