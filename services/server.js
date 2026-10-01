
app.get("/", async (req, res) => {
    return res.json({ message: "API FUCIONANDO !  ${PORT}" });
});

app.listen(PORT, () => {
    console.log(`API FUCIONANDO !  ${PORT}`);
});