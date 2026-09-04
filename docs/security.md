# Security Policy & Hall of Fame

Pardus GNU/Linux values the contributions of security researchers and the open-source community in keeping our distribution, core applications, and users secure. We are committed to addressing security vulnerabilities promptly and transparently.

---

## 🛡️ Reporting a Vulnerability / Zafiyet Bildirimi

If you believe you have found a security vulnerability in any Pardus software, package, or infrastructure, please report it responsibly before disclosing it publicly.

### Primary Contact
Please send your vulnerability report to our security and developer team:

* **Email:** [`dev@pardus.org.tr`](mailto:dev@pardus.org.tr)
* **Subject Prefix:** `[SECURITY]` or `[VULNERABILITY]` (e.g., `[SECURITY] pardus-update: LPE in SysActions.py`)

### What to Include
To help us triage and resolve the issue quickly, please provide:

1. **Affected Component:** Package name and version (e.g., `pardus-software 1.0.5`).
2. **Vulnerability Type:** Vulnerability classification (e.g., CWE-78 Command Injection, CWE-250 Privilege Escalation, CWE-116 Output Escaping).
3. **Reproduction Steps:** Clear, minimal step-by-step instructions or Proof of Concept (PoC).
4. **Impact:** Realistic assessment of the vulnerability's impact and privileges required.
5. **Proposed Remediation (Optional):** Suggested patch or pull request reference.

!!! info "Private Vulnerability Reporting (GitHub PVR)"
    For GitHub-hosted repositories under the [Pardus Organization](https://github.com/pardus), researchers are encouraged to use **GitHub Private Vulnerability Reporting** (Security Advisories) whenever available to report issues securely and privately.

---

## ⏱️ Coordinated Disclosure Process (CVD)

We follow a coordinated vulnerability disclosure model based on industry best practices and national guidelines:

| Phase | Target Timeline | Description |
|---|:---:|---|
| **Acknowledgment** | Within 48–72 hours | Confirmation of receipt and initial review by maintainers. |
| **Triage & Validation** | Within 7 days | Reproduction of the issue and severity assessment. |
| **Remediation & Patch** | 30–90 days | Development, testing, and packaging of the security fix. |
| **Coordinated Release** | Upon Package Release | Release of the security update to official Pardus repositories and public advisory / CVE coordination. |

!!! tip "Safe Harbor"
    Pardus will not pursue legal action against security researchers who:
    
    * Conduct research in good faith on their own isolated test systems or non-destructive environments.
    * Avoid disrupting services, accessing unauthorized user data, or causing system damage.
    * Provide reasonable time for remediation before public disclosure.

---

## 🏆 Security Hall of Fame / Güvenlik Katkıcıları

We express our sincere appreciation to the independent security researchers and community members who help keep Pardus secure through coordinated vulnerability disclosure and quality defensive patches.

| Researcher / Katkıcı | Finding / Area | Date | Acknowledgments |
|---|---|:---:|---|
| **Çağrı Eser** | `pardus-update` LPE Research (CVE-2026-5140) | 2026 | Responsible disclosure and detailed writeup on Polkit script argument handling. |

*(Diğer araştırmacılar ve katkıcılar koordineli bildirimlerin ardından bu listeye eklenecektir.)*

---

## 📞 Other Channels & Support

* **Pardus Forum:** [forum.pardus.org.tr](https://forum.pardus.org.tr/)
* **Pardus Talep Portalı:** [talep.pardus.org.tr](https://talep.pardus.org.tr/)
* **Official Website:** [pardus.org.tr](https://www.pardus.org.tr/)
