#!/bin/bash

# Backend Environment Variables Setup Script
# Generated from Vly for Git Sync
# Run this script to set up your Convex backend environment variables

echo 'Setting up Convex backend environment variables...'

# Check if Convex CLI is installed
if ! command -v npx &> /dev/null; then
    echo 'Error: npx is not installed. Please install Node.js and npm first.'
    exit 1
fi

echo "Setting JWKS..."
npx convex env set "JWKS" -- "{\"keys\":[{\"use\":\"sig\",\"kty\":\"RSA\",\"n\":\"iEo9mmu7glCrW99UeOB-ahNZRtIvV906Zax_8IbqahyidjZqozpvrt655fAw9bAesPmkNiZp-35T_9aaaFacgKQtdo1s79QXcY51eL3qWkzuQlmi5EjrlzcekYdB0BsfR2_3cU2vuHve-BCvDiZ5SLpCD1iZZ13Hf9muDRBg3OBAul3Uu2rAJn_b--Zp4gaVhpunWXvQ8bUrqQ0gO5n0lOCtJQyJY-Yd5nqLEmz_ubkv5AjQmRog7C34hSsvR-PGTjvEL8b2JLWcHFjSuRld9ki0XkrwRwJADXDiEvN7xXp1Anr2790CeIBT8cKNA-VFXlnqbXj8QgR3nhhXotTKhQ\",\"e\":\"AQAB\"}]}"

echo "Setting JWT_PRIVATE_KEY..."
npx convex env set "JWT_PRIVATE_KEY" -- "-----BEGIN PRIVATE KEY----- MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCISj2aa7uCUKtb 31R44H5qE1lG0i9X3TplrH/whupqHKJ2NmqjOm+u3rnl8DD1sB6w+aQ2Jmn7flP/ 1ppoVpyApC12jWzv1BdxjnV4vepaTO5CWaLkSOuXNx6Rh0HQGx9Hb/dxTa+4e974 EK8OJnlIukIPWJlnXcd/2a4NEGDc4EC6XdS7asAmf9v75mniBpWGm6dZe9DxtSup DSA7mfSU4K0lDIlj5h3meosSbP+5uS/kCNCZGiDsLfiFKy9H48ZOO8QvxvYktZwc WNK5GV32SLReSvBHAkANcOIS83vFenUCevbv3QJ4gFPxwo0D5UVeWeptePxCBHee GFei1MqFAgMBAAECggEAE8cmSm8A3ofjXik6InJ9ldop9f+RdEA79b5DML37bZur Ldl2vyo/Q9K5indBO54rzgXkQSFw9tidyv4zGRociwSIPnCGkwUlw8pnHLb+t8z7 NHC6lUNJwP90Na05rUAKWX0TnQMnkW+Ua05MgRKvPhEdfgme9WOkDFckDWxHijXg ok4JfEFFQYrf4+5eBHZ765n+fu4AG4KUhIbdcI16fa1a2r8LsE/ZAxAtS7sA7dka 03DFM4BEMvD5zLDxWDCmR0+GDKXU8wooTpWDVMIWu3HL8h2OK8bXxAMBD2w8tah9 SY7ZaU4hjijgNfKrE9mjJQH9sxiVUX2k5T4NLE6JjwKBgQDAUIlPxddXnJZIXZ02 iuG+sNfk472EuOYpKoRoWOFWCGcTHvsfmjye1VQAF0s42ODqXw/NJB6QTxtYQmNP RVFjtulmTdK8LPhDp+YMIIhZ6ORGNvmURQpLyayE2JwCAPOKb2u68cRpS8douMXF tPzeQWTeeUW8NJ5TF6uOKHV/HwKBgQC1bDihsw40y20m2XUXUuCeoPRiN9HI/Bq2 /MtXHneO6zqq26KU6eGqKhyPbMUitjTWKPc4PC/31kgNDrBLU7cTHi8wbXihr00r pN1RZx73VTUt6sQ/4h/ph0vMWIWU+/VfzKVlJTuwb+ka2DjKaq5XdOS3MB/phg7n 3oqL9iyV2wKBgGIYcoH7Y4Vv/QQ6pBePLekL4YQCWshZXCWBZ3qmY4Jz1MffFK8h CGzoWemV+CuuDMPf63pzQxfPEh6p9mgX7pUTVuh1J9oOgjBYczKaYZKjBdV+8z2b Hc5ct6AnsSQgghmKDgSUj+A55CRZo5/eWuGvr5j/eP+wQ1YVC8/+eTh3AoGAEHDN NQIX8Hra2mFsdf+hsV5epyPt0+vcs+Z2ut9c8Euq1l7u/dWwCI6mZezydHHUme++ b48svaXig6RoH3tnpMjgd+ADxYswUBsxnzXcHYfQOOgEftGMGMqU+OCwwk6O7u6J sn/MR/HsSu17QASo5e4G5/7pdW0bnrGRFpvpcG8CgYB8mFW5uv1vMRFux6+CHnQF t4MnLILI3yi5W4K65BFfbYZE8hRfGwHM6qBLNvbflWrQflXV+XaMOvIFJe6j/YIn Pay4OWLXEEPV7C2VGLEp1XzHXxx9/+gN3TfJdmuilslkSQWQUjFT/vkCy8UfverG +3lv8M1MnEL4BS+kF+gFIA"

echo "Setting SITE_URL..."
npx convex env set "SITE_URL" -- "http://localhost:5173"

echo "Setting VLY_APP_NAME..."
npx convex env set "VLY_APP_NAME" -- "Pure Brand Water"

echo "✅ All backend environment variables have been set!"
echo "You can now run: pnpm dev:backend"
