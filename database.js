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
    portfolio_link: document.getElementById('portfolioLinkContent').value,
    linkedin_link: document.getElementById('linkedinLinkContent').value,
    twitter_link: document.getElementById('twitterLinkConcent').value,
    instagram_link: document.getElementById('instagramLinkContent').value,
  },
])
.select()

}

async function insertsocialmediaTeam() {
    
  const { data, error } = await supabase
.from('social_media_team')
.insert([
  { 
    portfolio_link: document.getElementById('portfolioLinkSocial').value,
    linkedin_link: document.getElementById('linkedinLinkSocial').value,
    twitter_link: document.getElementById('twitterLinkSocial').value,
    instagram_link: document.getElementById('instagramLinkSocial').value,
    discord_link: document.getElementById('discordLinkSocial').value,  

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
        portfolio_link: document.getElementById('portfolioLinkDesign').value,
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
        portfolio_link: document.getElementById('portfolioLinkEditing').value,
        editing_tool: editingToolStr,
      },
    ])
    .select();
}

async function handleSubmit(event) {
    event.preventDefault();
    
    try {
        const userResult = await insertUsers();
        if (userResult.error) throw userResult.error;
        
        const selectedTeam = document.getElementById('team').value;
        
        switch(selectedTeam) {
            case 'technical':
                await inserttechTeam();
                break;
            case 'content':
                await insertcontentTeam();
                break;
            case 'socialmedia':
                await insertsocialmediaTeam();
                break;
            case 'design':
                await insertdesignTeam();
                break;
            case 'editing':
                await inserteditingTeam();
                break;
            default:
                throw new Error('Invalid team selection');
        }
        
        alert('Form submitted successfully!');
        document.getElementById('recruitmentForm').reset();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recruitmentForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

export { handleSubmit };
