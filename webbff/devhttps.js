const serverk = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGX1t5JNn4q2q7
EqLF4yvisCdCa5luBq09owsflo5Uoj5+jMk5s8F1lWhw9cNPWs9e6/d6lXweZO6W
UbvSAcbPrmDgkr2Ev6Tu0KPhtYqC1isR/eV+/zYKtkcFPMxBalmceLSJPDL73gDJ
zd2rXmavEL6gMDOUyKynWlJm/KK1hl2bt+8f78PU6jk5JWSfsg1aZDDy3MULAzWV
A1nptOFALwy3f0PDjQihzQr9401DhkNax49Gv4wiyeWsR9MFY/8mpiLH81weo0RB
Ft8SJZ5sRCAROUktETpfTxnqF5CcyBc2/dvLG8e5Ba/280HRh0IeXdBdcbND09Us
x2ef3GFlAgMBAAECggEAJ36kv6HOo+u8/DHhpnRsMF3R8y9pBLbflv33IPrgq4kB
2EA/b/WR9s8gVB0aHZp+3u8r/oP0ijieJ99t/YnNA1w8fXm5scxWEhYICtASG6p4
OMTMBFTbdZaE3U4VfJCn9rcxeoE5xVuV3JfYIl5RI1m6Gjp+iojJlygsb8SswGb+
LNRLN7rUkyUJlTHn3CJ3KFkuNmkwJ2+fexlaUgrGxe9YYdoHuSvYR8oBFPwQr7q9
7lC2pG6gn0v7iMaB2hkS/AJ/mHtc+wEWLw08gKMBdhU+L92uK9w93XwYSPbASWcv
ADye0ZDcU9NJlftPsIQTmEGq3JwhDxuvvig+3r/woQKBgQDuO1BSe/fUNMvcSXPY
G2L8LsadENU2uMNYtqI8BdE+iN1uHkUkYOWX2/rfo/io/Ksjx8eaGX34SUC1eeFr
40BV/asUY/Sk+q/vmdyLcAbHTlS+zhW5LgFuHMIILqBaXDvQgQPbbQX+qu5SGvIh
LJL9ulILqc23Z50u4QK9Qmo+VwKBgQDVKv2BuLmyIyXN5yY6Jt9nmXrrAM4jGylI
LNer3xSXPn9T3NQ5sRBCtmToqd1YjFJNElHzMTvT7gHVick8RY36rdE8AdZtPqvk
HGi3gDocKFHdyZOrbxVB8f4fmjWUHE0DizZy+62bIY/OD2QOrQrJ4LmeH6XpvxU9
aUbXvvDQowKBgQDJKyMHlBFRi4e+K/R7v5yVkTY8OZOiEuE6T3atssffw5kgPMVs
E7qswqCVKxR2Nm6Z10Cw2ufpuom+9P2qqgqQ0pUdsc5LZjkc3dNDl8TRlk6vlLz5
U2T3w6cBW8Yip5IG3nsQVn7ibxqyEHj4FHjHcweHO8swHXm4tV8nzCaFHwKBgHas
IUeHlHG0mYZAqgpzu6nMSx7ratcmdtwEgujfH3J3y6DfbpLTnS7WpeTVNDHopKTd
jxvpi9oXRZQgyhQw0LL+814J09srqbwriKynyTIFzFXBs+EbzWTSGNx1GGDlRIa1
iNGIhYS4sXtRHC4Dbd8nqY57Jf20cFmo81SGq0ArAoGAenpSJSi6TqYKTF3WwsuE
1xgBjHDLr6xuEktQYJofAGi4K7+TNTD1nDu7BBCBKA2d9oTJW7rlhykGqhXSHuex
oPONYNDaVIh4UfvkMLxxhuwz1TuSdOfifp20LfUEOAa0d1zlsh82L3JYM5t3NYmu
zYE9rrSZ+E4DInIs+JvdClE=
-----END PRIVATE KEY-----`;

const serverc = `-----BEGIN CERTIFICATE-----
MIIDxTCCAq2gAwIBAgIUGKJdUA029B6ZGeK5T7grb1lt79UwDQYJKoZIhvcNAQEL
BQAwcjELMAkGA1UEBhMCQ0ExEDAOBgNVBAgMB09udGFyaW8xETAPBgNVBAcMCFdh
dGVybG9vMRIwEAYDVQQDDAlyaXZlbmRlbGwxKjAoBgkqhkiG9w0BCQEWG3JlZGVm
aW5lc2NpZW5jZUBob3RtYWlsLmNvbTAeFw0yMDA3MzAwNDMyMjRaFw0yMDA4Mjkw
NDMyMjRaMHIxCzAJBgNVBAYTAkNBMRAwDgYDVQQIDAdPbnRhcmlvMREwDwYDVQQH
DAhXYXRlcmxvbzESMBAGA1UEAwwJcml2ZW5kZWxsMSowKAYJKoZIhvcNAQkBFhty
ZWRlZmluZXNjaWVuY2VAaG90bWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IB
DwAwggEKAoIBAQDGX1t5JNn4q2q7EqLF4yvisCdCa5luBq09owsflo5Uoj5+jMk5
s8F1lWhw9cNPWs9e6/d6lXweZO6WUbvSAcbPrmDgkr2Ev6Tu0KPhtYqC1isR/eV+
/zYKtkcFPMxBalmceLSJPDL73gDJzd2rXmavEL6gMDOUyKynWlJm/KK1hl2bt+8f
78PU6jk5JWSfsg1aZDDy3MULAzWVA1nptOFALwy3f0PDjQihzQr9401DhkNax49G
v4wiyeWsR9MFY/8mpiLH81weo0RBFt8SJZ5sRCAROUktETpfTxnqF5CcyBc2/dvL
G8e5Ba/280HRh0IeXdBdcbND09Usx2ef3GFlAgMBAAGjUzBRMB0GA1UdDgQWBBRI
pvqakBWtj7NPr+nHg97gT6m3lTAfBgNVHSMEGDAWgBRIpvqakBWtj7NPr+nHg97g
T6m3lTAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCDE2V3kXrf
Y72AtnCfl1xsryKdgsAYvFM3DLuZZaQpqs0kObPj76Amf8tVDUDoM8G/M4eFweGo
aPSopqJM2zMj69Ij1Z1C6zabQN7pli3Hf3RlV0o4vQ8mbnzg5hR/7Gier86tId18
6vsmrdypaOz7plnuIEQ5fWH+dhisdercxGa/qtCv+Zlg345FnUBGvLGhwff0IeEX
Ue/C7dHqNDCoiZNZdGHlX3Y40WJABE4WYDx+C4oggI8whgWbQ2LIcRM/CxuH8aUd
EX6RYRipvgTt2dRIG5EOKTiMSSsto4cvL1tfhwsCih86+zuUYqBypfTCXIUibtAu
foyfs60Unmea
-----END CERTIFICATE-----`;

const creds = { key: serverk, cert: serverc };

const https = require("https");

module.exports = (app) => https.createServer(creds, app);