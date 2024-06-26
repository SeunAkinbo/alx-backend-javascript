async function handleProfileSignup() {
  try {
    const [uploadResponse, userResponse] = await Promise.all([
      uploadPhoto(), // Replace with actual function call
      createUser(),  // Replace with actual function call
    ]);
    console.log(`body: ${uploadResponse.body}`);
    console.log(`firstName: ${userResponse.firstName}`);
    console.log(`lastName: ${userResponse.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
