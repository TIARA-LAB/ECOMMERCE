export default function Profile() {
  return (
    <div className="profile-page">
      <h2>Edit Your Profile</h2>
      <form className="profile-form">
        <div className="form-row">
          <div>
            <label>First Name</label>
            <input type="text"  />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text"  />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Address</label>
            <input type="text"  />
          </div>
        </div>

        <h3>Password Changes</h3>
        <div className="form-row">
          <div>
            <label>Current Password</label>
            <input type="password" placeholder="Current Password" />
            
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>New Password</label>
            <input type="password" placeholder="New Password" />
            
          
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Confirm New Password</label>
            <input type="password" placeholder="Confirm New Password" />
           
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
  );
}


