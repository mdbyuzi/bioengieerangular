import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="footer-container">
      <ul>
        <li><span class="before-list">About Us</span>
          <ul>
            <li>History</li>
            <li>Mission & vision</li>
            <li>Achievements</li>
            <li>Certificates</li>
            <li>Download Catalog</li>
          </ul>
        </li>
        <li><span class="before-list" >More Information</span>
          <ul>
            <li>Vessel Fabrication</li>
            <li>Electropolishing</li>
            <li>Piping</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </li>
        <li><span class="before-list">Contact Info</span>
          <ul>
            <li>
              <span>Address:</span><p>No.10, 2th ST, Simin Dasht Industrial Area, Karaj, IRAN</p>  
            </li>
            <li>
              <span>Phone:</span> <p>026 - 36670244</p>
            </li>
            <li>
              <span>Fax:</span> <p>026 - 36670309</p>
            </li>
            <li>
              <span>Email:</span> <p>info&#64;Arokobioeng.com</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
